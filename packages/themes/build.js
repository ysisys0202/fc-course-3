import run from "@fastcampus/esbuild-config";
import pkg from "./package-lock.json" assert { type: "json" };

run({ pkg });
