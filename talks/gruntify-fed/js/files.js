var presentationFiles = [
	{
		"_id": "534dfd65469e9d316f00000f",
		"updatedAt": "2014-11-15T20:04:48.929Z",
		"url": "",
		"content": "// Gruntfile.js\nmodule.exports = function(grunt) {\n  grunt.initConfig({\n    jshint: {\n      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],\n      options: {\n        globals: {\n          module: true,\n          document: true\n        }\n      }\n    }\n  });\n\n  grunt.loadNpmTasks('grunt-contrib-jshint');\n\n  grunt.registerTask('default', ['jshint']);\n};",
		"mimeType": "text/plain",
		"language": "text/javascript",
		"folder": false,
		"parent": null,
		"name": "gruntfile-before.js"
	},
	{
		"_id": "534e097089f8cf3d75000009",
		"updatedAt": "2014-11-15T20:04:48.929Z",
		"url": "",
		"content": "{\n  \"name\": \"myapp\",\n  \"version\": \"0.1.0\",\n  \"description\": \"this is my app\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  },\n  \"author\": \"Elijah Manor\",\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"grunt\": \"^0.4.4\",\n    \"grunt-contrib-jshint\": \"^0.10.0\"\n  }\n}",
		"mimeType": "text/plain",
		"language": "application/json",
		"folder": false,
		"parent": null,
		"name": "package.json"
	},
	{
		"_id": "53e38d5cff9fdbd002000028",
		"updatedAt": "2014-11-15T20:04:48.929Z",
		"url": "",
		"content": "linters:\n  BorderZero:\n    enabled: true\n\n  CapitalizationInSelector:\n    enabled: false\n\n  ColorKeyword:\n    enabled: false\n\n  Comment:\n    enabled: false\n\n  DebugStatement:\n    enabled: true\n\n  DeclarationOrder:\n    enabled: true\n\n  DuplicateProperty:\n    enabled: false\n\n  EmptyLineBetweenBlocks:\n    enabled: true\n    ignore_single_line_blocks: true\n\n  EmptyRule:\n    enabled: true\n\n  FinalNewline:\n    enabled: true\n    present: true\n\n  HexLength:\n    enabled: true\n    style: short # or 'long'\n\n  HexNotation:\n    enabled: true\n    style: lowercase # or 'uppercase'\n\n  HexValidation:\n    enabled: false\n\n  IdWithExtraneousSelector:\n    enabled: true\n\n  Indentation:\n    enabled: true\n    width: 2\n\n  LeadingZero:\n    enabled: true\n    style: include_zero # or 'exclude_zero'\n\n  MergeableSelector:\n    enabled: true\n    force_nesting: true\n\n  NameFormat:\n    enabled: false\n    convention: BEM # or hyphenated_lowercase or regex pattern\n\n  PlaceholderInExtend:\n    enabled: false\n\n  PropertySortOrder:\n    enabled: false\n\n  PropertySpelling:\n    enabled: true\n    extra_properties: []\n\n  SelectorDepth:\n    enabled: true\n    max_depth: 3\n\n  Shorthand:\n    enabled: true\n\n  SingleLinePerSelector:\n    enabled: true\n\n  SpaceAfterComma:\n    enabled: true\n\n  SpaceAfterPropertyColon:\n    enabled: true\n\n  SpaceAfterPropertyName:\n    enabled: true\n\n  SpaceBeforeBrace:\n    enabled: true\n    allow_single_line_padding: false\n\n  SpaceBetweenParens:\n    enabled: true\n    spaces: 0\n\n  StringQuotes:\n    enabled: false\n    style: double_quotes\n\n  TrailingSemicolonAfterPropertyValue:\n    enabled: true\n\n  UnnecessaryMantissa:\n    enabled: true\n\n  UrlFormat:\n    enabled: false\n\n  UrlQuotes:\n    enabled: true\n\n  ZeroUnit:\n    enabled: false \n\t\n  Compass::*:\n    enabled: false",
		"mimeType": "text/plain",
		"language": "text/x-yaml",
		"folder": false,
		"parent": null,
		"name": ".scss-lint.yml"
	}
];