module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',  // TypeScript dosyaları için
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],  // Jest'in hangi dosya uzantılarını desteklediğini belirtir.
  };
  