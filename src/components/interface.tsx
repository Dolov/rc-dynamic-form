
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

interface FormProps {
  value: object;
  config: config;
  isView: boolean;
  focusId: string | null;
  editable: boolean;
  undoable: boolean;
  onItemEdit: Function;
}


export {
  group,
  config,
  FormProps,
  fieldItem,
  GroupProps,
  FieldItemProps,
}