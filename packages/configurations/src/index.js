const path = require("path");
const viteConfig = require("./vite.config");

const pkg = require(path.resolve(".", "package.json"));

/**
 * Merge an instance with another one
 * @param target Object to merge the custom values into
 * @param source Object with custom values
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
const mergeWith = (target, source) => {
  const isObject = (obj) => obj && typeof obj === "object";

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = merge(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
  }

  return target;
};

/**
 * Recursively merges the specified object instances
 * @param instances Instances to merge, from left to right
 */
const merge = (...instances) => {
  let i = instances.length - 1;
  while (i > 0) {
    instances[i - 1] = mergeWith(instances[i - 1], instances[i]);
    i--;
  }
  return instances[0];
};

/**
 * Returns Vite build configuration amended with the specified options
 * @param configuration Default build options
 * @param options Custom build options
 * @param name Optional name of a library, used when building a library instead of browser-executable package
 * @returns Vite build configuration
 */
const getConfiguration = (configuration, options = {}, name) => {
  const result = merge(
    // Default configuration
    configuration,
    // If name specified, we're building a library, so pass that to build/lib configuration
    name ? { build: { lib: { name } } } : {},
    // Custom options to override the default configuration
    options
  );

  // Handy when you need to peek into that final build configuration
  // when things go berserk ;-)
  // console.warn(JSON.stringify(result, null, 2))

  return result;
};

/**
 * Returns Vite build configuration for common (isomorphic) packages,
 * optionally amended with the specified options
 * @param options Custom build options
 * @returns Vite build configuration
 */
const ViteConfig = (options = {}) => {
  console.log(`Building package ${pkg.name} v.${pkg.version} ...`);
  return getConfiguration(viteConfig, options, pkg.name);
};

module.exports = {
  ViteConfig,
};
