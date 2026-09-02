class invalidNucleotideError extends Error {
  constructor(char: string) {
    console.log(`invalid DNA Nucleotide: "${char}"`);
    this.name = 'invalidNucleotideError';
  }
}

const DNA_TO_RNA: Record<string, string> = {
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C',
};
export function transcribeDNA(dna: string): string {
  dna = dna.toUpperCase();
  let rna = '';
  for (var c of dna) {
    const complement = DNA_TO_RNA[c];
    if (!complement) {
      throw new invalidNucleotideError(c);
    }
    rna += complement;
  }
  return rna;
}
