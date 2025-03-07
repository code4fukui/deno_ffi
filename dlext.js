export const dlext = () => {
  const os = Deno.build.os;
  // console.log(os)
  if (os === "windows") {
    return ".dll";
  } else if (os === "darwin") { // macOS
    return ".dylib";
  } else { // Linux
    return ".so";
  }
};
