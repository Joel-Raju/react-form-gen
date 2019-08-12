import * as React from "react";

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input: React.FC<IProps> = props => <input {...props} />;

export default Input;
