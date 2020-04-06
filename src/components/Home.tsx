import { useState } from "react";
import update from "immutability-helper";
import { Box, Heading, Paragraph, TextInput, Text, Button } from "grommet";

const Home = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<string[]>(["initial"]);

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
          onClick={(): void => {
            const newData = update(data, { $push: [value] });
            setData(newData);
            setValue("");
          }}
        >
          add
        </Button>
      </Box>

      <Box>
        {data.map((d, index) => (
          <Text key={index}>{d}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
