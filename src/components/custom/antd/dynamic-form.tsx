import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  DatePicker,
  FormInstance,
} from "antd";
import { Rule } from "antd/lib/form";

export interface FormItemConfig {
  name: string;
  label: string;
  type: "text" | "select" | "checkbox" | "date" | "custom";
  placeholder?: string;
  options?: { label: string; value: string | number }[];
  rules?: Rule[];
  component?: React.ReactNode;
}

interface DynamicFormProps {
  formConfig: FormItemConfig[];
  onFinish: unknown;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig, onFinish }) => {
  const [form] = Form.useForm<FormInstance>();

  const renderFormItem = (item: FormItemConfig) => {
    if (item.component) {
      return item.component; // Render custom component if provided
    }
    switch (item.type) {
      case "text":
        return <Input placeholder={item.placeholder || "Enter value"} />;
      case "select":
        return (
          <Select placeholder={item.placeholder || "Select value"}>
            {item.options?.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        );
      case "checkbox":
        return <Checkbox>{item.label}</Checkbox>;
      case "date":
        return <DatePicker className="w-full" />;
      default:
        return <Input placeholder={item.placeholder || "Enter value"} />;
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish as unknown as () => void}
      layout="vertical"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formConfig.map((item) => (
          <Form.Item
            key={item.name}
            name={item.name}
            label={item.label}
            rules={item.rules}
            valuePropName={item.type === "checkbox" ? "checked" : "value"}
            className="col-span-1"
          >
            {renderFormItem(item)}
          </Form.Item>
        ))}
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full sm:w-auto">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
