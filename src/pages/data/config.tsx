
export default {
  formLayout: 'vertical', // horizontal  vertical
  groups: [
    {
      title: 'boolean',
      items: [
        {
          label: 'BOOLEAN(布尔)',
          name: "25",
          help: "布尔类型的提示信息",
          editable: true,
          decorator: {
            initialValue: false,
            rules: [{'required': true}],
          },
          child: {
            compType: 'BOOLEAN',
            options: [
              {value: true, title: 'YES' },
              {value: false, title: 'NO' },
            ],
          },
        },
      ],
    },

    {
      title: '文本',
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
          name: "03",
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
          name: "04",
          help: null,
          editable: true,
          decorator: {
            initialValue: '15516507000',
            rules: null,
          },
          child: {
            compType: 'TELPHON',
            options: null,
          },
        },

        {
          label: 'CELLPHONEI18N(国际手机号)',
          name: "26",
          help: null,
          editable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'CELLPHONEI18N',
            options: null,
          },
        },

        {
          label: 'TELPHONEI18N(国际电话号)',
          name: "27",
          help: null,
          editable: true,
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'TELPHONEI18N',
            options: null,
          },
        },

        




        

        {
          label: 'CELLPHONE(固定电话)',
          name: "05",
          code: 'cellphone',
          help: null,
          colSpan: 1,
          columnType: 'CELLPHONE',
          dataSource: null,
          pathChain: '2356:05',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'CELLPHONE(固定电话)',
          decorator: {
            initialValue: '0371-5000000',
            rules: null,
          },
          child: {
            compType: 'CELLPHONE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": true},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },

    {
      title: '带图标链接',
      items: [
        {
          label: 'EMAIL(电子邮箱)',
          name: "02",
          code: 'email',
          help: null,
          colSpan: 1,
          columnType: 'EMAIL',
          dataSource: null,
          pathChain: '2356:02',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'EMAIL(电子邮箱)',
          decorator: {
            initialValue: 'songyan_shi@000.com',
            rules: null,
          },
          child: {
            compType: 'EMAIL',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": true},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'URL(网址)',
          name: "06",
          code: 'url',
          help: null,
          colSpan: 1,
          columnType: 'URL',
          dataSource: null,
          pathChain: '2356:06',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'URL(网址)',
          decorator: {
            initialValue: 'http://www.baidu.com?',
            rules: null,
          },
          child: {
            compType: 'URL',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },


      ],
    },

    {
      title: '数字',
      items: [
        {
          label: 'DOUBLE(浮点数)',
          name: "07",
          code: 'double',
          help: null,
          colSpan: 1,
          columnType: 'DOUBLE',
          dataSource: null,
          pathChain: '2356:07',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'DOUBLE(浮点数)',
          decorator: {
            initialValue: 0,
            rules: null,
          },
          child: {
            compType: 'DOUBLE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'CURRENCY(货币)',
          name: "08",
          code: 'currency',
          help: null,
          colSpan: 1,
          columnType: 'CURRENCY',
          dataSource: null,
          pathChain: '2356:08',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'CURRENCY(货币)',
          decorator: {
            initialValue: 998000,
            rules: null,
          },
          child: {
            compType: 'CURRENCY',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'PERCENTAGE(百分比)',
          name: "09",
          code: 'percentage',
          help: null,
          colSpan: 1,
          columnType: 'PERCENTAGE',
          dataSource: null,
          pathChain: '2356:09',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'PERCENTAGE(百分比)',
          decorator: {
            initialValue: 90.0,
            rules: null,
          },
          child: {
            compType: 'PERCENTAGE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'INT(整数)',
          name: "10",
          code: 'int',
          help: null,
          colSpan: 1,
          columnType: 'INT',
          dataSource: null,
          pathChain: '2356:10',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'INT(整数)',
          decorator: {
            initialValue: 1000,
            rules: null,
          },
          child: {
            compType: 'INT',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
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
          code: 'enclosure',
          help: null,
          colSpan: 1,
          columnType: 'ENCLOSURE',
          dataSource: null,
          pathChain: '2356:11',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'ENCLOSURE(附件)',
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            buildQRCode: true,
            compType: 'ENCLOSURE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'MAP(地图)',
          name: "22",
          code: 'map',
          help: null,
          colSpan: 1,
          columnType: 'MAP',
          dataSource: null,
          pathChain: '2356:22',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'MAP(地图)',
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
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'ADDRESS(单选)',
          name: "23",
          code: 'address',
          help: null,
          colSpan: 1,
          columnType: 'ADDRESS',
          isHidden: false,
          dataSource: null,
          pathChain: '2356:23',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'ADDRESS(单选)',
          decorator: {
            initialValue: null,
            // {
            //   text: ["山西省", "晋中市", "和顺县", "牛川乡"],
            //   value: ["14000000", "14040000", "14040400", "140404004"],
            // },
            rules: null,
          },
          child: {
            compType: 'ADDRESS',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
            addressType: 'RADIO',
            addressShowLevel: 4,
            addressSelectLevel: 4,
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'ADDRESS(多选)',
          name: "24",
          code: 'address',
          help: null,
          colSpan: 1,
          isHidden: false,
          columnType: 'ADDRESS',
          dataSource: null,
          pathChain: '2356:24',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'ADDRESS(多选)',
          decorator: {
            initialValue: null,
            // initialValue: {
            //   text: [
            //     ["河北省", "保定市", "竞秀区", "保定国家高新区"],
            //     ["山西省", "长治市", "城区", "长青街道"],
            //   ],
            //   value: [
            //     ['13000000', '13010000', '13010100', '130101001'],
            //     ['14000000', '14010000', '14010100', '140101001'],
            //   ],
            // },
            rules: null,
          },
          child: {
            compType: 'ADDRESS',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
            addressType: 'MULTISELECT',
            addressShowLevel: 4,
            addressSelectLevel: 4,
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
        {
          label: 'ADDRESSI18N(国际地址)',
          name: "28",
          code: 'ADDRESSI18N',
          help: null,
          colSpan: 1,
          columnType: 'ADDRESSI18N',
          dataSource: null,
          pathChain: '2356:28',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'ADDRESSI18N(国际地址)',
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'ADDRESSI18N',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": true},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },

    

    {
      title: '主数据',
      items: [
        {
          label: 'RADIO(单选列表)',
          name: "12",
          code: 'radio',
          help: null,
          colSpan: 1,
          columnType: 'RADIO',
          dataSource: null,
          pathChain: '2356:12',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'RADIO(单选列表)',
          decorator: {
            initialValue: '0',
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
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
            cascading: true,
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'MULTISELECT(多选列表)',
          name: "13",
          code: 'multiselect',
          help: null,
          colSpan: 1,
          columnType: 'MULTISELECT',
          dataSource: null,
          pathChain: '2356:13',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'MULTISELECT(多选列表)',
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
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'RADIOTREE(单选树)',
          name: "14",
          code: 'radiotree',
          help: null,
          colSpan: 1,
          columnType: 'RADIOTREE',
          dataSource: null,
          pathChain: '2356:14',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'RADIOTREE(单选树)',
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
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'MULTISELECTTREE(多选树)',
          name: "15",
          code: 'multiselecttree',
          help: null,
          colSpan: 1,
          columnType: 'MULTISELECTTREE',
          dataSource: null,
          pathChain: '2356:15',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'MULTISELECTTREE(多选树)',
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
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },

    {
      title: 'MULTITOONE、IDRELATIONSHIP',
      items: [
        {
          label: 'MULTITOONE(多对一关联)',
          name: "16",
          code: 'multitoone',
          help: null,
          colSpan: 1,
          columnType: 'MULTITOONE',
          dataSource: null,
          pathChain: '2356:16',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'MULTITOONE(多对一关联)',
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'MULTITOONE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'IDRELATIONSHIP(一对一关联)',
          name: "17",
          code: 'idrelationship',
          help: null,
          colSpan: 1,
          columnType: 'IDRELATIONSHIP',
          dataSource: null,
          pathChain: '2356:17',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'IDRELATIONSHIP(一对一关联)',
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'IDRELATIONSHIP',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },

    {
      title: 'time',
      items: [
        {
          label: 'DATE(日期)',
          name: "18",
          code: 'date',
          help: null,
          colSpan: 1,
          columnType: 'DATE',
          dataSource: null,
          pathChain: '2356:18',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'DATE(日期)',
          decorator: {
            initialValue: null,
            rules: null,
          },
          child: {
            compType: 'DATE',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'TIMESTAMP(日期时间)',
          name: "19",
          code: 'timestamp',
          help: null,
          colSpan: 1,
          columnType: 'TIMESTAMP',
          dataSource: null,
          pathChain: '2356:19',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'TIMESTAMP(日期时间)',
          decorator: {
            initialValue: '2008-05-18',
            rules: null,
          },
          child: {
            compType: 'TIMESTAMP',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },

    {
      title: '特殊文本字段',
      items: [
        {
          label: 'FORMULA(公式)',
          name: "20",
          code: 'formula',
          help: null,
          colSpan: 1,
          columnType: 'FORMULA',
          dataSource: null,
          pathChain: '2356:20',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'FORMULA(公式)',
          decorator: {
            initialValue: 0,
            rules: null,
          },
          child: {
            compType: 'FORMULA',
            formulaResultType: "TIMESTAMP",
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },

        {
          label: 'AUTONUMBER(自增序号)',
          name: "21",
          code: 'autonumber',
          help: null,
          colSpan: 1,
          columnType: 'AUTONUMBER',
          dataSource: null,
          pathChain: '2356:21',
          pathChainStr: "",
          metaDataId: "2356",
          customName: 'AUTONUMBER(自增序号)',
          decorator: {
            initialValue: false,
            rules: null,
          },
          child: {
            compType: 'AUTONUMBER',
            options: null,
            sendRequest: {
              "layoutUpdate": {"enable": false},
              "formulaFieldsCalc": {"enable": false},
              "externalFieldsCalc": {"enable": false},
            },
          },
          meta: {
            editable: true,
            notNull: true,
          },
          restLayoutMiniInfo: {
            standardBOId: null,
            miniPage: false,
          },
        },
      ],
    },
  ],
}
