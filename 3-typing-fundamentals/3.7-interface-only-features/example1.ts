// Interface only features

// 1. Extend a class. Example:
class Animal {
  name = "animal";
}

interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = {
  name: "bear",
  honey: true,
};
