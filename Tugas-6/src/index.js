import { Sapa, Convert, CheckScore, FilterData } from "./lib/lib";

let proccArg = process.argv.slice(2);
let [parameter, ...parameters] = proccArg;

switch (parameter) {
  case "Sapa":
    Sapa(parameters);
    break;
  case "Convert":
    Convert(parameters);
    break;
  case "CheckScore":
    CheckScore(parameters);
    break;
  case "FilterData":
    FilterData(parameters);
  default:
    break;
}
