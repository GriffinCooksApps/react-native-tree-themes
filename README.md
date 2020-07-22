# react-native-themes
Add theme and theme management to ract-native


# Usage 

'''
Currently there can be only 1.

To use, as some point in your early stage, put in a theme provider.
If you want to use a theme in the same place as you inject it use : buildTheme(themeStructure);

to use it in a class you need to wrap the class in themeInjector.
I am thinking if using babbles decorator, but I think it was rejected, so maybe not.

to use inside of a function call getTheme()

This will take a structure as per the default example (I am in a rush will explain better later).

It will merge the structure into themes with names like menu-title as it goes through the structure.
Each child element should either be style or a sub element.
The sub element will be something like menu-title-text, it will inherit the parent attributes. and adds it's own (overriding the parent)

This allows you to make sweeping changes without having to verify every possible place you put it.

Also, this version is not tested, if it breaks, I will replace it as soon as possible.

Good luck, email me if you need help, or want to help.
'''