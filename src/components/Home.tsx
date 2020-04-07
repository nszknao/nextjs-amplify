import { useState, useCallback, useEffect, useReducer } from "react";
import update from "immutability-helper";
import { Box, Heading, Paragraph, TextInput, Text, Button } from "grommet";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import { CreateTodoInput, ListTodosQuery } from "../API";
import { onCreateTodo } from "../graphql/subscriptions";

const Home = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<CreateTodoInput[]>([]);

  const createNewTodo = useCallback(async () => {
    const todo = {
      name: "Use AWS AppSync",
      description: "Realtime and Offline",
    };
    await API.graphql(graphqlOperation(createTodo, { input: todo }));
  }, []);

  useEffect(() => {
    (async () => {
      const result = await API.graphql(graphqlOperation(listTodos));
      if ("data" in result && result.data) {
        const data = result.data as ListTodosQuery;
        if (data.listTodos) {
          setData(data.listTodos.items as CreateTodoInput[]);
        }
      }
    })();
  }, []);

  return (
    <Box pad="small">
      <Heading level={3}>
        <strong>TODO</strong>
      </Heading>
      <Paragraph>TODOを追加してください。</Paragraph>

      <Box pad="small">
        <TextInput
          plain
          value={value}
          placeholder="TODOを追加..."
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Button
          onClick={async (): Promise<void> => {
            await createNewTodo();
            const newData = update(data, {
              $push: [{ id: "id", name: value, description: "desc" }],
            });
            setData(newData);
            setValue("");
          }}
        >
          add
        </Button>
      </Box>

      <Box>
        {data.map((d, index) => (
          <Text key={index}>{d.name}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
