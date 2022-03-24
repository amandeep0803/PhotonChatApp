
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('BG')
export class BG extends Component {
    mainBG:any;
    start () {
        this.mainBG=this.node.getComponent('mainBG');
    }
    onJoinBtnClick(){
        let scrollView=this.node.getChildByName('ScrollView');
        let joinBtn=this.node.getChildByName('joinBtn');
        let sendBtn=this.node.getChildByName('sendBtn');
        let message=this.node.getChildByName('message');
        this.mainBG.subscribeChannel();
        scrollView.active=true;
        joinBtn.active=false;
        sendBtn.active=true;
        message.active=true;
    }
    onSendMessageClick(){
        this.mainBG.sendMessage();
        
    }
}
