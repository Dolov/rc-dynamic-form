
export default {
  formLayout: 'vertical', // horizontal  vertical
  groups: [

    {
      title: '文本类型',
      items: [
        {
          label: 'TEXT(文本)',
          name: "01",
          help: null,
          editable: true,
          decorator: {
            initialValue: 'TEXT(initialValue)',
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
          name: "02",
          help: null,
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
          name: "03",
          help: null,
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

        {
          label: 'CELLPHONE(固定电话)',
          name: "04",
          help: null,
          editable: true,
          decorator: {
            initialValue: '0371-5000000',
            rules: null,
          },
          child: {
            compType: 'CELLPHONE',
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
          name: "05",
          help: null,
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
          name: "06",
          help: null,
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
          name: "07",
          help: null,
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
          name: "08",
          editable: true,
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
          name: "09",
          help: null,
          editable: true,
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
          name: "10",
          help: null,
          editable: true,
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
          name: "11",
          help: null,
          editable: true,
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
          label: 'MAP(地图)',
          name: "12",
          help: null,
          editable: true,
          decorator: {
            initialValue: `{
              "module":"locationPicker",
              "latlng":{"lat":31.260137610264728,"lng":120.63633643257143},
              "poiaddress":"江苏省苏州市吴中区太湖东路",
              "poiname":"吴中区苏州澹台湖大酒店宝带楼东楼南",
              "cityname":"苏州市"
            }`,
            rules: null,
          },
          child: {
            compType: 'MAP',
            options: null,
          },
        },

        {
          label: 'ADDRESS(单选)',
          name: "13",
          help: null,
          editable: true,
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
          name: "14",
          help: null,
          colSpan: 1,
          editable: true,
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
          label: 'RADIO(单选列表)',
          name: "15",
          help: null,
          editable: true,
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            compType: 'RADIO',
            options: [
              {
                value: false,
                child: '假的么',
              },
              {
                value: true,
                child: '真的么',
              },
            ],
          },
        },

        {
          label: 'MULTISELECT(多选列表)',
          name: "16",
          help: null,
          editable: true,
          decorator: {
            initialValue: ['shi', 'cai'],
            rules: null,
          },
          child: {
            compType: 'MULTISELECT',
            options: [
              {
                value: 'shi',
                child: '石松岩',
              },
              {
                value: 'cai',
                child: '牛魔王',
              },
            ],
          },
        },

        {
          label: 'RADIOTREE(单选树)',
          name: "17",
          help: null,
          editable: true,
          decorator: {
            initialValue: 'shu2',
            rules: null,
          },
          child: {
            compType: 'RADIOTREE',
            options: [
              {
                value: 'shu1',
                title: '树妈妈',
                children: [
                  {
                    value: 'shu3',
                    title: '树妈妈1',
                    children: [],
                  },
                ],
              },
              {
                value: 'shu2',
                title: '树爸爸🌲',
                children: [],
              },
            ],
          },
        },

        {
          label: 'MULTISELECTTREE(多选树)',
          name: "18",
          help: null,
          
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
                value: '3902',
                title: '国家',
                children: [
                  {
                    value: '3903',
                    title: '美国',
                    children: [
                      {
                        value: '3904',
                        title: '旧金山',
                      },
                    ],
                  },
                  {
                    value: '3905',
                    title: '中国',
                    children: [
                      {
                        value: '3906',
                        title: '江苏省',
                      },
                      {
                        value: '3907',
                        title: '浙江省',
                      },
                    ],
                  },
                ],
              },
            ],
            
          },
          editable: true,
        },
      ],
    },

    {
      title: '日期时间类',
      items: [
        {
          label: 'DATE(日期)',
          name: "19",
          help: null,
          editable: true,
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
          label: 'TIMESTAMP(日期时间)',
          name: "20",
          help: null,
          editable: true,
          decorator: {
            initialValue: '2008-05-18',
            rules: null,
          },
          child: {
            compType: 'TIMESTAMP',
            options: null,
          },
        },
      ],
    },
  ],
}
