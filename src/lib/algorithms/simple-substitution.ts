class SimpleSubstitution {
  private key: string;
  private alphabet: string;
  constructor(key: string) {
    this.key = key.toLowerCase() + key.toUpperCase();
    this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  private subChars(substitutionMap: Map<string, string>, input: string) {
    return Array.from(input, (char) => substitutionMap.get(char) ?? char).join(
      ""
    );
  }

  public encrypt = (str: string) => {
    const substitutionMap = new Map<string, string>(
      this.alphabet.split("").map((char, index) => [char, this.key[index]])
    );

    return this.subChars(substitutionMap, str);
  };

  public decrypt = (str: string) => {
    const substitutionMap = new Map<string, string>(
      Array.from(this.alphabet, (char, index) => [this.key[index], char])
    );
    return this.subChars(substitutionMap, str);
  };
}

export default SimpleSubstitution;
