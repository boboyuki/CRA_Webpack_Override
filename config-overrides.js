const {
  override
} = require("customize-cra");
 
module.exports = override((config, env) => {
  console.log('config', config);
  console.log('env',env)
  return config
}
);