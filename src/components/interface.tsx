
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
  child: child;
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

interface child {
  compType: string;
  options: Array<any>;
}

interface ControlProps extends child {
  
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
  collapseBordered: boolean;
}


export {
  group,
  child,
  config,
  FormProps,
  fieldItem,
  GroupProps,
  ControlProps,
  FieldItemProps,
  DisplayTextProps,
}