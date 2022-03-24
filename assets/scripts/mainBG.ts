
import { _decorator, Component, Node, EditBox } from 'cc';
import Network from './server';
const { ccclass, property } = _decorator;

@ccclass('mainBG')
export class mainBG extends Component {
    photon:Network;
    start () {
        this.photon=new Network();
        this.photon.getScript(this.node.getComponent('mainBG'));
        this.photon.connectToRegionMaster('Asia');
    }
    subscribeChannel(){
        this.photon.subscribe(['channelB']);
    }
    sendMessage(){
        let messageNode:Node=this.node.getChildByName('message');
        let message=messageNode.getComponent(EditBox).string;
        messageNode.getComponent(EditBox).string="";
        let contentNodeScript:any=this.node.getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent('content');
        contentNodeScript.addLabel(message,false)
        this.photon.sendMessage(message);
    }
    messageTransfer(message:any){
        let contentNodeScript:any=this.node.getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent('content');
        contentNodeScript.addLabel(message,true);
    }
}
