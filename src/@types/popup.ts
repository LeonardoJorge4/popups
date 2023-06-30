export interface PopupProps {
  title: string;
  subtitle: string;
  game: boolean;
  videoUrl?: string;
  formFields: {
    type: string;
    placeholder: string;
  }[];
  consentCheckboxes?: [
    {
      id: string;
      label: string;
    }
  ];
}
