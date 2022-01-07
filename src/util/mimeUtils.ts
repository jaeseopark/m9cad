/* eslint-disable import/prefer-default-export */

export const guessMimetypeAsync = async (filepath: string) => {
  const lowerFilepath = filepath.toLowerCase();
  if (lowerFilepath.endsWith(".mp4"))
    return "video/mp4";
  else if (lowerFilepath.endsWith(".mov"))
    return "video/quicktime";
  else if (lowerFilepath.endsWith(".webm"))
    return "video/webm";
  throw new Error("No mimetype detected");
};
