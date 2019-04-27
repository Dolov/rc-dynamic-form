
interface config {
  formLayout: 'horizontal' | 'vertical';
  groups: Array<group>;
}


interface group {
  title: string;
  items: Array<any>;
}

interface GroupProps {
  items: Array<any>;
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
  GroupProps,
}