type Props = {
  description: string;
};

export default function Achievement({ description }: Props) {
  return <div className="mk-general-item-title">{description}</div>;
}
