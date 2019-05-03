
export default {
  formLayout: 'vertical', // horizontal  vertical
  groups: [

    {
      title: '文本类型',
      items: [
        {
          label: 'TEXT(文本)',
          name: "text",
          help: '文本帮助信息',
          undoable: false,
          editable: true,
          decorator: {
            initialValue: '代码千万行，注释第一行。',
            rules: [
              {required: true, message: '必填'},
            ],
          },
          child: {
            compType: 'TEXT',
            options: null,
          },
        },
        
        {
          label: 'TEXTAREA(多行文本)',
          name: "textarea",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: 'TEXTAREA(initialValue)',
            rules: null,
          },
          child: {
            compType: 'TEXTAREA',
            options: null,
          },
        },

        {
          label: 'TELPHON(手机号)',
          name: "telphon",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: '15500000000',
            rules: null,
          },
          child: {
            compType: 'TELPHON',
            options: null,
          },
        },
      ],
    },


    {
      title: '链接类型',
      items: [
        {
          label: 'EMAIL(电子邮箱)',
          name: "email",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: 'songyan_shi@163.com',
            rules: null,
          },
          child: {
            compType: 'EMAIL',
            options: null,
          },
        },

        {
          label: 'URL(网址)',
          name: "url",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: 'https://github.com/Dolov/react-dynamic-form',
            rules: null,
          },
          child: {
            compType: 'URL',
            options: null,
          },
        },
      ],
    },

    {
      title: '数字类型',
      items: [
        {
          label: 'DOUBLE(浮点数)',
          name: "double",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: 0.98,
            rules: null,
          },
          child: {
            compType: 'DOUBLE',
            options: null,
          },
        },

        {
          label: 'CURRENCY(货币)',
          name: "currency",
          editable: true,
          undoable: true,
          decorator: {
            initialValue: 998000,
            rules: null,
          },
          child: {
            compType: 'CURRENCY',
            options: null,
          },
        },

        {
          label: 'PERCENTAGE(百分比)',
          name: "percentage",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: 90.0,
            rules: null,
          },
          child: {
            compType: 'PERCENTAGE',
            options: null,
          },
        },

        {
          label: 'INT(整数)',
          name: "int",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: 1000,
            rules: null,
          },
          child: {
            compType: 'INT',
            options: null,
          },
        },
      ],
    },

    {
      title: '附件、地图选点、地址',
      items: [
        {
          label: 'ENCLOSURE(附件)',
          name: "enclosure",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'ENCLOSURE',
            options: null,
          },
        },

        

        {
          label: 'ADDRESS(单选)',
          name: "address1",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'ADDRESS',
            options: null,
            
            addressType: 'RADIO',
            addressShowLevel: 4,
            addressSelectLevel: 4,
          },
          
        },

        {
          label: 'ADDRESS(多选)',
          name: "address2",
          help: null,
          colSpan: 1,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'ADDRESS',
            options: null,
            addressType: 'MULTISELECT',
            addressShowLevel: 4,
            addressSelectLevel: 4,
          },
        },
        
      ],
    },

    

    {
      title: '单选多选',
      items: [
        {
          label: 'CASCADER(级联)',
          name: "cascader",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            expandTrigger: "hover",
            compType: 'CASCADER',
            options: [{
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                  value: 'xihu',
                  label: 'West Lake',
                }],
              }],
            }, {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                }],
              }],
            }],
          },
        },
        {
          label: 'RADIO(单选按钮)',
          name: "radio",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            compType: 'RADIO',
            options: [
              {
                value: true,
                label: '男 👱',
              },
              {
                value: false,
                label: '女 👩',
              },
            ],
          },
        },
        {
          label: 'CHECKBOX(多选按钮)',
          name: "checkbox",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            compType: 'CHECKBOX',
            options: [
              {
                value: 'huanggua',
                label: '黄瓜 🥒',
              },
              {
                value: 'xiangjiao',
                label: '香蕉 🍌',
              },
              {
                value: 'qiezi',
                label: '茄子 🍆',
              },
              {
                value: 'huluobo',
                label: '胡萝卜 🥕',
              },
            ],
          },
        },
        {
          label: 'SELECT(单选列表)',
          name: "select",
          help: null,
          undoable: true,
          editable: true,
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            compType: 'SELECT',
            options: [
              {
                value: 'F',
                label: '头等舱 ✈️',
              },
              {
                value: 'C',
                label: '商务舱 ✈️',
              },
              {
                value: 'Y',
                label: '经济舱 ✈️',
              },
            ],
          },
        },

        {
          label: 'MULTISELECT(多选列表)',
          name: "multiselect",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: ['shi', 'cai'],
            rules: null,
          },
          child: {
            compType: 'MULTISELECT',
            options: [
              {
                value: 'duck',
                label: '烤鸭 🦆',
              },
              {
                value: 'chiken',
                label: '烧鸡 🐔',
              },
              {
                value: 'pig',
                label: '烤乳猪 🐷',
              },
            ],
          },
        },

        {
          label: 'SELECTTREE(单选树)',
          name: "selecttree",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: 'shu2',
            rules: null,
          },
          child: {
            compType: 'SELECTTREE',
            options: [
              {
                value: 'beijing',
                title: '北京',
                children: [
                  {
                    value: 'chaoyang',
                    title: '朝阳区',
                  },
                  {
                    value: 'haidian',
                    title: '海淀区',
                  },
                ],
              },
              {
                value: 'suzhou',
                title: '苏州',
                children: [
                  {
                    value: 'wuzhongqu',
                    title: '吴中区',
                  },
                  {
                    value: 'gongyeyuanqu',
                    title: '工业园区',
                  },
                ],
              },
            ],
          },
        },

        {
          label: 'MULTISELECTTREE(多选树)',
          name: "multiselecttree",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: {
              text: ['旧金山', '美国'],
              value: ['3904', '3903'],
            },
            rules: null,
          },
          child: {
            compType: 'MULTISELECTTREE',
            options: [
              {
                value: '01',
                title: '支付宝事业部负责人',
                children: [{
                  value: '01-01',
                  title: '小王',
                },{
                  value: '01-02',
                  title: '小李',
                }]
              },
              {
                value: '02',
                title: '淘宝事业部负责人',
                children: [{
                  value: '02-01',
                  title: '张三',
                },{
                  value: '02-02',
                  title: '赵四',
                }]
              },
              {
                value: '03',
                title: 'ClickPaaS 前端研发部负责人',
                children: [{
                  value: '03-01',
                  title: '阿翔',
                },{
                  value: '03-02',
                  title: '阿强',
                }]
              },
            ],
            
          },
          
        },
      ],
    },

    {
      title: '日期时间类',
      items: [
        {
          label: 'TIMEPICKER(时分秒)',
          name: "timepicker",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'TIMEPICKER',
            options: null,
          },
        },
        {
          label: 'DATE(年月日)',
          name: "date",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'DATE',
            options: null,
          },
        },
        {
          label: 'MONTH(年月)',
          name: "month",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'MONTH',
            options: null,
          },
        },
        {
          label: 'WEEK(年周)',
          name: "week",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'WEEK',
            options: null,
          },
        },

        {
          label: 'TIMESTAMP(日期时间)',
          name: "timestamp",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: '2008-05-18',
            rules: null,
          },
          child: {
            compType: 'TIMESTAMP',
            options: null,
          },
        },
        {
          label: 'DATERANGE(日期范围)',
          name: "daterange",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: '2008-05-18',
            rules: null,
          },
          child: {
            format: "YYYY-MM-DD HH:mm:ss",
            compType: 'DATERANGE',
            options: null,
          },
        },
        
      ],
    },
    {
      title: "特殊字段",
      items: [
        {
          label: 'RANGE(区间范围)',
          name: "range",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'RANGE',
            options: null,
          },
        },
        {
          label: 'SWITCH(开关)',
          name: "switch",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'SWITCH',
            options: null,
          },
        },
        {
          label: 'RATE(评分)',
          name: "rate",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'RATE',
            options: null,
          },
        },
        {
          label: 'MAP(地图)',
          name: "map",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            rules: null,
          },
          child: {
            amapKey: 'd771766da7b94868c8103d749ba3ead7',
            compType: 'MAP',
            options: null,
          },
        },
        {
          label: 'TRANSFER(穿梭框)',
          name: "transfer",
          help: null,
          editable: true,
          undoable: true,
          decorator: {
            rules: null,
          },
          child: {
            compType: 'TRANSFER',
            render: (item: any) => item.title,
            options: [
              {
                key: 'react',
                title: 'REACT',
              },
              {
                key: 'angular',
                title: 'ANGULAR',
              },
              {
                key: 'vue',
                title: 'VUE',
              },
            ],
          },
        },
      ]
    },
  ],
}
