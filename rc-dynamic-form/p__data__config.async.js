(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{mHpB:function(l,e,a){"use strict";a.r(e),e["default"]={formLayout:"vertical",groups:[{title:"\u6587\u672c\u7c7b\u578b",items:[{label:"TEXT(\u6587\u672c)",name:"text",help:"\u6587\u672c\u5e2e\u52a9\u4fe1\u606f",undoable:!0,editable:!0,decorator:{initialValue:"TEXT(initialValue)",rules:[{required:!0,message:"\u5fc5\u586b"}]},child:{compType:"TEXT",options:null}},{label:"TEXTAREA(\u591a\u884c\u6587\u672c)",name:"textarea",help:null,undoable:!0,editable:!0,decorator:{initialValue:"TEXTAREA(initialValue)",rules:null},child:{compType:"TEXTAREA",options:null}},{label:"TELPHON(\u624b\u673a\u53f7)",name:"telphon",help:null,undoable:!0,editable:!0,decorator:{initialValue:"15500000000",rules:null},child:{compType:"TELPHON",options:null}}]},{title:"\u94fe\u63a5\u7c7b\u578b",items:[{label:"EMAIL(\u7535\u5b50\u90ae\u7bb1)",name:"email",help:null,undoable:!0,editable:!0,decorator:{initialValue:"songyan_shi@163.com",rules:null},child:{compType:"EMAIL",options:null}},{label:"URL(\u7f51\u5740)",name:"url",help:null,undoable:!0,editable:!0,decorator:{initialValue:"https://github.com/Dolov/react-dynamic-form",rules:null},child:{compType:"URL",options:null}}]},{title:"\u6570\u5b57\u7c7b\u578b",items:[{label:"DOUBLE(\u6d6e\u70b9\u6570)",name:"double",help:null,undoable:!0,editable:!0,decorator:{initialValue:.98,rules:null},child:{compType:"DOUBLE",options:null}},{label:"CURRENCY(\u8d27\u5e01)",name:"currency",editable:!0,undoable:!0,decorator:{initialValue:998e3,rules:null},child:{compType:"CURRENCY",options:null}},{label:"PERCENTAGE(\u767e\u5206\u6bd4)",name:"percentage",help:null,editable:!0,undoable:!0,decorator:{initialValue:90,rules:null},child:{compType:"PERCENTAGE",options:null}},{label:"INT(\u6574\u6570)",name:"int",help:null,editable:!0,undoable:!0,decorator:{initialValue:1e3,rules:null},child:{compType:"INT",options:null}}]},{title:"\u9644\u4ef6\u3001\u5730\u56fe\u9009\u70b9\u3001\u5730\u5740",items:[{label:"ENCLOSURE(\u9644\u4ef6)",name:"enclosure",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"ENCLOSURE",options:null}},{label:"MAP(\u5730\u56fe)",name:"map",help:null,editable:!0,undoable:!0,decorator:{initialValue:'{\n              "module":"locationPicker",\n              "latlng":{"lat":31.260137610264728,"lng":120.63633643257143},\n              "poiaddress":"\u6c5f\u82cf\u7701\u82cf\u5dde\u5e02\u5434\u4e2d\u533a\u592a\u6e56\u4e1c\u8def",\n              "poiname":"\u5434\u4e2d\u533a\u82cf\u5dde\u6fb9\u53f0\u6e56\u5927\u9152\u5e97\u5b9d\u5e26\u697c\u4e1c\u697c\u5357",\n              "cityname":"\u82cf\u5dde\u5e02"\n            }',rules:null},child:{compType:"MAP",options:null}},{label:"ADDRESS(\u5355\u9009)",name:"address1",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"ADDRESS",options:null,addressType:"RADIO",addressShowLevel:4,addressSelectLevel:4}},{label:"ADDRESS(\u591a\u9009)",name:"address2",help:null,colSpan:1,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"ADDRESS",options:null,addressType:"MULTISELECT",addressShowLevel:4,addressSelectLevel:4}}]},{title:"\u5355\u9009\u591a\u9009",items:[{label:"RADIO(\u5355\u9009\u6309\u94ae)",name:"radio",help:null,editable:!0,undoable:!0,decorator:{initialValue:!1,rules:null},child:{compType:"RADIO",options:[{value:!0,label:"\u7537 \ud83d\udc71"},{value:!1,label:"\u5973 \ud83d\udc69"}]}},{label:"CHECKBOX(\u591a\u9009\u6309\u94ae)",name:"checkbox",help:null,editable:!0,undoable:!0,decorator:{initialValue:!1,rules:null},child:{compType:"CHECKBOX",options:[{value:"huanggua",label:"\u9ec4\u74dc \ud83e\udd52"},{value:"xiangjiao",label:"\u9999\u8549 \ud83c\udf4c"},{value:"qiezi",label:"\u8304\u5b50 \ud83c\udf46"},{value:"huluobo",label:"\u80e1\u841d\u535c \ud83e\udd55"}]}},{label:"SELECT(\u5355\u9009\u5217\u8868)",name:"select",help:null,undoable:!0,editable:!0,decorator:{initialValue:!1,rules:null},child:{compType:"SELECT",options:[{value:"F",label:"\u5934\u7b49\u8231 \u2708\ufe0f"},{value:"C",label:"\u5546\u52a1\u8231 \u2708\ufe0f"},{value:"Y",label:"\u7ecf\u6d4e\u8231 \u2708\ufe0f"}]}},{label:"MULTISELECT(\u591a\u9009\u5217\u8868)",name:"multiselect",help:null,editable:!0,undoable:!0,decorator:{initialValue:["shi","cai"],rules:null},child:{compType:"MULTISELECT",options:[{value:"duck",label:"\u70e4\u9e2d \ud83e\udd86"},{value:"chiken",label:"\u70e7\u9e21 \ud83d\udc14"},{value:"pig",label:"\u70e4\u4e73\u732a \ud83d\udc37"}]}},{label:"SELECTTREE(\u5355\u9009\u6811)",name:"selecttree",help:null,editable:!0,undoable:!0,decorator:{initialValue:"shu2",rules:null},child:{compType:"SELECTTREE",options:[{value:"beijing",title:"\u5317\u4eac",children:[{value:"chaoyang",title:"\u671d\u9633\u533a"},{value:"haidian",title:"\u6d77\u6dc0\u533a"}]},{value:"suzhou",title:"\u82cf\u5dde",children:[{value:"wuzhongqu",title:"\u5434\u4e2d\u533a"},{value:"gongyeyuanqu",title:"\u5de5\u4e1a\u56ed\u533a"}]}]}},{label:"MULTISELECTTREE(\u591a\u9009\u6811)",name:"multiselecttree",help:null,editable:!0,undoable:!0,decorator:{initialValue:{text:["\u65e7\u91d1\u5c71","\u7f8e\u56fd"],value:["3904","3903"]},rules:null},child:{compType:"MULTISELECTTREE",options:[{value:"01",title:"\u652f\u4ed8\u5b9d\u4e8b\u4e1a\u90e8\u8d1f\u8d23\u4eba",children:[{value:"01-01",title:"\u5c0f\u738b"},{value:"01-02",title:"\u5c0f\u674e"}]},{value:"02",title:"\u6dd8\u5b9d\u4e8b\u4e1a\u90e8\u8d1f\u8d23\u4eba",children:[{value:"02-01",title:"\u5f20\u4e09"},{value:"02-02",title:"\u8d75\u56db"}]},{value:"03",title:"ClickPaaS \u524d\u7aef\u7814\u53d1\u90e8\u8d1f\u8d23\u4eba",children:[{value:"03-01",title:"\u963f\u7fd4"},{value:"03-02",title:"\u963f\u5f3a"}]}]}}]},{title:"\u65e5\u671f\u65f6\u95f4\u7c7b",items:[{label:"DATE(\u5e74\u6708\u65e5)",name:"date",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"DATE",options:null}},{label:"MONTH(\u5e74\u6708)",name:"month",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"MONTH",options:null}},{label:"WEEK(\u5e74\u5468)",name:"week",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"WEEK",options:null}},{label:"TIMESTAMP(\u65e5\u671f\u65f6\u95f4)",name:"timestamp",help:null,editable:!0,undoable:!0,decorator:{initialValue:"2008-05-18",rules:null},child:{compType:"TIMESTAMP",options:null}},{label:"DATERANGE(\u65e5\u671f\u8303\u56f4)",name:"daterange",help:null,editable:!0,undoable:!0,decorator:{initialValue:"2008-05-18",rules:null},child:{format:"YYYY-MM-DD HH:mm:ss",compType:"DATERANGE",options:null}}]},{title:"\u7279\u6b8a\u5b57\u6bb5",items:[{label:"RANGE(\u533a\u95f4\u8303\u56f4)",name:"range",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"RANGE",options:null}},{label:"SWITCH(\u5f00\u5173)",name:"switch",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"SWITCH",options:null}},{label:"RATE(\u8bc4\u5206)",name:"rate",help:null,editable:!0,undoable:!0,decorator:{initialValue:null,rules:null},child:{compType:"RATE",options:null}}]}]}}}]);