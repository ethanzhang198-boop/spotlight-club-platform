import { aiScript, applications, candidates, clubs, landingModules, messages, navigation } from "../data/domainData";

function delay(ms = 240) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function fetchBootstrapData() {
  await delay();

  return clone({
    clubs,
    candidates,
    applications,
    messages,
    navigation,
    landingModules
  });
}

export async function fetchAiScript() {
  await delay(120);
  return clone(aiScript);
}
