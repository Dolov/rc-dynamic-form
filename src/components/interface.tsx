
interface config {
  formLayout: 'horizontal' | 'vertical';
  groups: Array<group>;
}


interface group {
  title: string;
  items: Array<any>;
}

interface fieldItem {
  name: string;
  help: string;
  label: string;
  editable: boolean;
}

interface GroupProps {
  items: Array<any>;
}

interface FieldItemProps {
  data: fieldItem;
}

interface DisplayTextProps {
  value: any;
}

interface ControlProps {
  child: {
    compType: string;
  };
}

interface FormProps {
  form: any;
  value: object;
  config: config;
  isView: boolean;
  focusId: string | null;
  editable: boolean;
  undoable: boolean;
  onItemEdit: Function;
  onSave: Function;
  onCancel: Function;
}


export {
  group,
  config,
  FormProps,
  fieldItem,
  GroupProps,
  ControlProps,
  FieldItemProps,
  DisplayTextProps,
}