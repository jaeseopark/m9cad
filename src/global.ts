export const config = {
  previewNodeEnabled: true,
};

export const enablePreviewNode = () => {
  config.previewNodeEnabled = true;
};

export const disablePreviewNode = () => {
  config.previewNodeEnabled = false;
};

export const togglePreviewNode = () => {
  config.previewNodeEnabled = !config.previewNodeEnabled;
};
