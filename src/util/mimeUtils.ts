/* eslint-disable import/prefer-default-export */

export const guessMimetypeAsync = async (filepath: string) => {
  if (filepath.endsWith(".mp4")) return "video/mp4";
  else if (filepath.endsWith(".mov")) return "video/quicktime";
  throw new Error("No mimetype detected");
};
