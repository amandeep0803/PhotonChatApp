
import { _decorator, Component, Node } from 'cc';
// import Network from './server';
const { ccclass, property } = _decorator;

@ccclass('mainBG')
export class mainBG extends Component {
    // photon:Network;
    start () {
        // this.photon=new Network();
        // this.photon.getScript(this.node.getComponent('BG'));
        // this.photon.connectToRegionMaster('Asia');
    }
    // subscribeChannel(){
    //     this.photon.subscribe(['channelB']);
    // }
    // sendMessage(){
    //     this.photon.sendMessage('This is working');
    // }
}
