const chalk = require('chalk');
module.exports = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] » ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF00FF").bold('[ Error ] »') + data);
     break;
    default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FFD700").bold('[ JAZER DMETRIOV ] » ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff03ea").bold('[ JAZER DMETRIOV ] » ') + data);
      break;
    default:
      console.log(chalk.bold.hex("#00FFFF").bold(`[ JAZER DMETRIOV ] » `) + data);
      break;
  }
                                    }