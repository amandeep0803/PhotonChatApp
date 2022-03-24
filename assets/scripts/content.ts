
import { _decorator, Component, Node, Prefab, instantiate, Label, UITransformComponent, UITransform, Color } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('content')
export class content extends Component {
    @property({type:Prefab})
    messageLabel:Prefab;
    yPos:number=0;

    start () {
        this.node.getComponent(UITransform).height=0;
    }
    addLabel(message:any,toLeft:any){
        let messageNode:Node=instantiate(this.messageLabel);
        messageNode.getComponent(Label).string=message;
        let messageNodeWidth=messageNode.getComponent(UITransform).width;
        let messageNodeHeight=messageNode.getComponent(UITransform).height
        let parentHeight=this.node.parent.getComponent(UITransform).height;
        let nodeHeight=this.node.getComponent(UITransform).height;
        let nodeWidth=this.node.getComponent(UITransform).width;
        let position=this.node.position;
        this.node.addChild(messageNode);
        if(toLeft){
            messageNode.setPosition(-(nodeWidth*0.5-messageNodeWidth*0.5),this.yPos-messageNodeHeight*0.5,1);
        }
        else{
            messageNode.setPosition(nodeWidth*0.5-messageNodeWidth*0.5,this.yPos-messageNodeHeight*0.5,1);
        }
        this.node.getComponent(UITransform).height=nodeHeight+messageNodeHeight;
        this.node.setPosition(position.x,parentHeight*0.5-nodeHeight*0.5,position.z);
        this.yPos-=(messageNodeHeight);
    }
}
