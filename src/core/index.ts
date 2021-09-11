import { pass, fail } from './colors';

function test(description: string, fn: () => boolean) {
  let now = Date.now();
  let result = fn();
  let delta = Date.now() - now;
  if(result) {
    console.log(`${pass("PASS")}\n✓ ${description} (${delta}ms)`);
  } else {
    console.log(`${fail("FAIL")}\n❌ ${description} (${delta}ms)`);
  }
}

function expect(value: any) {
  return {
    toBe: (testValue: any) => {
      if(testValue === value) {
        return true;
      } else {
        return false;
      }
    },
    notToBe: (testValue: any) => {
      if(testValue !== value) {
        return true;
      } else {
        return false;
      }
    },
    toBeGreateThan: (testValue: any) => {
      if(testValue < value) {
        return true;
      } else {
        return false;
      }
    },
    toBeLessThan: (testValue: any) => {
      if(testValue > value) {
        return true;
      } else {
        return false;
      }
    },
    toMatchType: (type: any) => {
      if(typeof value === type) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export {
  test,
  expect
}