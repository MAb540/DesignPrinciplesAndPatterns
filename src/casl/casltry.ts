import {
  defineAbility,
  PureAbility,
  AbilityTuple,
  MatchConditions,
  ConditionsMatcher,
} from "@casl/ability";

import {
  createHmac,
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from "crypto";

// const mongoAbility = defineAbility((can, cannot) => {
//   can("view", "users", {
//     id: "random",
//     name: "some",
//     age: "23",
//   });
//   cannot("delete", "users");
// });

class Article {
  constructor(createdAt: number) {
    createdAt = createdAt;
  }
}

type Action = "read" | "update" | "view";
type Subject = typeof Article | "Article" | "Users";

// const conditionsMatcher = ()=>{

// }

const fieldMatcher = (fields: Array<string>) => {
  return (field: string) => {
    return fields.includes(field);
  };
};

type MatchCond = ConditionsMatcher<
  MatchConditions<Record<PropertyKey, string>>
>;

const conditionsMatcher: MatchCond = (matchConditions: MatchConditions) => {
  return matchConditions;
};

const pureAbility = new PureAbility<
  AbilityTuple<Action, Subject>,
  MatchConditions
>(
  [
    {
      action: ["read", "update"],
      subject: Article,
      fields: ["createdAt", "updatedAt"],
      //   conditions: {},
      //   inverted: true,
    },

    {
      action: "view",
      subject: "Article",
    },
  ],
  {
    fieldMatcher: fieldMatcher,
    conditionsMatcher: conditionsMatcher,
  }
);

function encrypt(content: string) {
  const randomBy = randomBytes(16);
  console.log("randomBy: ", randomBy);

  const strBuf = "8667ca2a4a4e59f4";

  console.log("randomBytes", randomBytes);

  console.log("from buffer: ", Buffer.from(strBuf));

  const cipher = createCipheriv(
    "aes-256-cbc",
    "21cd888165ad4e6fb8463db61236f2f5",
    Buffer.from(strBuf)
  );
  let encryptedContent = cipher.update(content);
  encryptedContent = Buffer.concat([encryptedContent, cipher.final()]);
  let ans = encryptedContent.toString("hex");

  console.log("ans: ", ans);
}

export const caslCaller = () => {
  //   console.log("pureAbility: ", pureAbility.can("read", "Article", "updatedAt"));
  /**
   * mongo ability use
   */
  //   const canViewUsers = mongoAbility.can("view", "users", "random");
  //   console.log("canViewUsers: ", canViewUsers);
  //   const canNotViewUsers = mongoAbility.cannot("view", "users");
  //   console.log("canViewUsers: ", canNotViewUsers);

  encrypt("humanPasswordIsStrongAnd");
};
