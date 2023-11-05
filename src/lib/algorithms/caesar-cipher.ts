class CaesarCipher {
  private shift: number;
  constructor(shift: number) {
    this.shift = shift % 26;
  }

  public encrypt = (str: string): string => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + this.shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + this.shift) % 26) + 97);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  };

  public decrypt = (str: string): string => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - this.shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - this.shift) % 26) + 97);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  };
}

export default CaesarCipher;
