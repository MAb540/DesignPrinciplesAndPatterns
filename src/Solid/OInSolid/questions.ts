type Questions = Array<
  | {
      type: string;
      description: string;
      options?: undefined;
    }
  | {
      type: string;
      description: string;
      options: string[];
    }
>;

/**
 * here we are violating the open close principle, because
 * if we need to add a new question type, we would also need to
 * modify the printQuiz function, to also support that type,
 * this type of behaviour breaks open close princile, which states
 * a software component(module,class,function,etc..) should be closed
 * for modification but open for extension.
 * we will refactor this piece of code to follow open close
 * principle.
 */

export function printQuiz(questions: Questions) {
  questions.forEach((question) => {
    console.log(question.description);

    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;

      case "multipleChoice":
        question.options?.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;

      case "text":
        console.log("Answer: _________");
        break;
    }
    console.log("");
  });
}

export const questions = [
  {
    type: "boolean",
    description: "This principle is useful",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite solid Principle",
    options: ["Single Responsibility", "Open Close", "Liskov Substitution"],
  },
  {
    type: "text",
    description: "Describe your favorite JS Feature",
  },
];
interface printQuestions {
  printQuestionChoices(): void;
}

class BooleanQuestion implements printQuestions {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion implements printQuestions {
  description: string;
  private options: Array<string>;
  constructor(descripton: string, options: Array<string>) {
    this.description = descripton;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion implements printQuestions {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: _________");
  }
}

class PromptQuestion implements printQuestions {
  description: string;
  constructor(description: string) {
    this.description = description;
  }

  printQuestionChoices(): void {
    console.log("Please enter your prompt: ");
  }
}

type questionType = (
  | TextQuestion
  | BooleanQuestion
  | MultipleChoiceQuestion
  | PromptQuestion
)[];

export function printQuizes(questions: questionType) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log();
  });
}

export const questionsTypes = [
  new BooleanQuestion("This principle is useful"),
  new MultipleChoiceQuestion("What is your favorite solid Principle", [
    "Single Responsibility",
    "Open Close",
    "Liskov Substitution",
  ]),
  new TextQuestion("Describe your favorite JS Feature"),
  new PromptQuestion("Hou would you use Prompt Engineering"),
];
