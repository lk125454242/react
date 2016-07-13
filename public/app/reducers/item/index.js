import Immutable from 'immutable'//自动拷贝对象节点
import { SHOW_LIST, DELETE_ITEM, DELETE_ALL } from '../../actions/actionTypes'
import _ from 'lodash';

const initialItems = {
    page:0,
    size:2,
    list:[ { "mvideoId": 112, "userId": "root", "title": "布鲁克林", "category": "其他", "image": "http:\/\/star.oss.joygo.com\/7A4524D37EA038C1AA94134F15C1504B.jpg", "url": "http:\/\/121.43.114.111:5000\/F1ff1hwzy0nmXLdXjniQRqjP3fPsmuist.m3u8?token=guoziyun&user=sunniwell&tid=0", "utc": 1460363205924, "price": 0, "playCount": 157, "playDuration": 0 }, { "mvideoId": 115, "userId": "root", "title": "卡罗尔", "category": "其他", "image": "http:\/\/star.oss.joygo.com\/45904A81DAF84A8C9348B852174FBD63.jpg", "url": "http:\/\/121.43.114.111:5000\/FRUV8KCa7aoLEHCArnOCa9IouTWGRgjTj.m3u8?token=guoziyun&user=sunniwell&tid=0", "utc": 1460363392101, "price": 0, "playCount": 78, "playDuration": 0 }, { "mvideoId": 117, "userId": "root", "title": "恶人报喜", "category": "其他", "image": "http:\/\/star.oss.joygo.com\/2870B4E0D84AC7EB1491D26C56D6E17E.jpg", "url": "http:\/\/121.43.114.111:5000\/FsOAz2ob1Y8LWbMXAq2VDvNAATAX7mtnP.m3u8?token=guoziyun&user=sunniwell&tid=0", "utc": 1460363483573, "price": 0, "playCount": 36, "playDuration": 0 }, { "mvideoId": 118, "userId": "root", "title": "真相禁区", "category": "其他", "image": "http:\/\/star.oss.joygo.com\/2C6779E650A9F261CD190CCEB1180EE6.jpg", "url": "http:\/\/121.43.114.111:5000\/F3QrEo7Q9vcpqTuH5vusG1z319y10rNHN.m3u8?token=guoziyun&user=sunniwell&tid=0", "utc": 1460363663596, "price": 100, "playCount": 10, "playDuration": 0 } ],
    isFetching:false
};
function remove(array,number) {
    var i;
    for(i in array){
        var obj = array[i];
        if(obj.utc === number){
            _.remove(array,obj);
            return array
        }
    }
}

export default function items(state = initialItems, action) {
    switch(action.type) {
        case SHOW_LIST:
            return _.assign({},state,{
                list:Array.prototype.concat.apply(state.list,action.response)
            });
        case DELETE_ITEM:
            var list = remove(state.list,action.utc);
            return _.assign({},state,{
                list:list
            });
        case DELETE_ALL:
            return _.assign({},state,{
                list:[]
            });
        default:
            return state
    }
}
