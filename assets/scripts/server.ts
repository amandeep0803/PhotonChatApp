export default class Network extends Photon.Chat.ChatClient{
    senderID:any;
    mainBG:any;
    constructor(){
        super(1,'16640e06-fbb4-43ba-8993-bb20bdc24393','1.0.0');
    }
    getScript(script:any){
        this.mainBG=script;
    }
    sendMessage(message:any){
        this.publishMessage('channelA',message);
    }
    onSubscribeResult(results: Object): void {
        if(results['channelB']){
            this.publishMessage('channelB','Hello');
        }
    }
    onChatMessages(channelName: string, messages: Photon.Chat.Message[]): void {
        if(channelName=='channelB'){
            this.senderID = messages[0].getSender()
            this.unsubscribe(['channelB'])
            this.subscribe(['channelA'])
        }
        else{
            for(let message of messages){
                if(message.getSender()==this.senderID){
                    console.log("Hi");
                }
                else{
                    console.log("Bye");
                }
            }
        }
    }
}