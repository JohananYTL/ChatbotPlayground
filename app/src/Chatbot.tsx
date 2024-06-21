import ChatBot, { Params } from "react-chatbotify";

const MyChatBot = () => {
	const flow={
		start: {
			message: "Hey! Look at my messages stream in, pretty cool isn't it?",
			path: "thank"
		},
		thank: {
			message: async (params : Params) => {
				await params.injectMessage("I am an injected message!");
				return "I am a return message!";
			},
			path: "start"
		}
	}
	return (
		<ChatBot options={{theme: {embedded: false}, chatHistory: {storageKey: "example_simulation_stream"}, botBubble: {simStream: true}}} flow={flow}/>
	);
};

export default MyChatBot;