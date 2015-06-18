---
layout: post
title: Enforce Coding Style with EditorConfig
date: '2013-09-04 18:43:00'
---

http://editorconfig.org/

Atom Package - https://atom.io/packages/editorconfig

Sublime Text Package https://github.com/sindresorhus/editorconfig-sublime#readme

JetBrains Plugin https://github.com/editorconfig/editorconfig-jetbrains#readme

Emacs Plugin https://github.com/editorconfig/editorconfig-emacs#readme

Vim Plugin https://github.com/editorconfig/editorconfig-vim#readme



examples of files https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig



```
# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.css]
indent_size = 4
```

What is EditorConfig?
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

What's an EditorConfig file look like?
Example file
Below is an example .editorconfig file setting end-of-line and indentation styles for Python and JavaScript files.

# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[*.js]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
Check the Wiki for some real-world examples of projects using EditorConfig files.

Where are these files stored?
When opening a file, EditorConfig plugins look for a file named .editorconfig in the directory of the opened file and in every parent directory. A search for .editorconfig files will stop if the root filepath is reached or an EditorConfig file with root=true is found.

EditorConfig files are read top to bottom and the closest EditorConfig files are read last. Properties from matching EditorConfig sections are applied in the order they were read, so properties in closer files take precedence.

For Windows Users: To create an .editorconfig file within Windows Explorer, you need to create a file named .editorconfig., which Windows Explorer will automatically rename to .editorconfig.

File Format Details
EditorConfig files use an INI format that is compatible with the format used by Python ConfigParser Library, but [ and ] are allowed in the section names. The section names are filepath globs, similar to the format accepted by gitignore. Forward slashes (/) are used as path separators and octothorpes (#) or semicolons (;) are used for comments. Comments should go on their own lines. EditorConfig files should be UTF-8 encoded, with either CRLF or LF line separators.

Filepath glob patterns and currently-supported EditorConfig properties are explained below.

Wildcard Patterns

Special characters recognized in section names for wildcard matching:

*	Matches any string of characters, except path separators (/)
**	Matches any string of characters
?	Matches any single character
name	Matches any single character in name
!name	Matches any single character not in name
{s1,s2,s3}	Matches any of the strings given (separated by commas) (Available since EditorConfig Core 0.11.0)
Special characters can be escaped with a backslash so they won't be interpreted as wildcard patterns.

Supported Properties

Note that not all properties are supported by every plugin. The wiki has a complete list of properties.

indent_style: set to tab or space to use hard tabs or soft tabs respectively.
indent_size: a whole number defining the number of columns used for each indentation level and the width of soft tabs (when supported). When set to tab, the value of tab_width (if specified) will be used.
tab_width: a whole number defining the number of columns used to represent a tab character. This defaults to the value of indent_size and doesn't usually need to be specified.
end_of_line: set to lf, cr, or crlf to control how line breaks are represented.
charset: set to latin1, utf-8, utf-8-bom, utf-16be or utf-16le to control the character set. Use of utf-8-bom is discouraged.
trim_trailing_whitespace: set to true to remove any whitespace characters preceding newline characters and false to ensure it doesn't.
insert_final_newline: set to true ensure file ends with a newline when saving and false to ensure it doesn't.
root: special property that should be specified at the top of the file outside of any sections. Set to true to stop .editorconfig files search on current file.
Currently all properties and values are case-insensitive. They are lowercased when parsed.

It is acceptable and often preferred to leave certain EditorConfig properties unspecified. For example, tab_width need not be specified unless it differs from the value of indent_size. Also, when indent_style is set to tab, it may be desirable to leave indent_size unspecified so readers may view the file using their preferred indentation format. Additionally, if a property is not standardized in your project (end_of_line for example), it may be best to leave it blank.

Download a Plugin
AppCodeAppCodeCode::BlockCode::BlockEmacsEmacsGeanyGeanyGeditGeditintelliJintelliJjEditjEditNotepad++Notepad++PHPStormPHPStormPyCharmPyCharmRubyMineRubyMineSublime TextSublime TextTextMateTextMateVimVimVisual StudioVisual StudioWebStormWebStormAtomAtom
Contributing to EditorCo