import fs from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const timestamp = new Date().toISOString();
  const logLine = `${timestamp} - ${statusMessage}\n`;

  await fs.promises.appendFile(filePath, logLine, 'utf-8');
}
