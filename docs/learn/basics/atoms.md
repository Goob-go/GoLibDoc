# Atoms
 Atoms are like building blocks.
That is, they are also like primitive data types, but with additional functionality.

::: info WHAT YOU'LL LEARN
⚫What is atom

⚫How to create a atom

⚫How to use atoms
:::

## Whats is atom?
Іs a value on top of which there is a table, that is, a class. This allows you to increase the functionality.

## Creating a atom
Let's start with a simple one, create a number
```luau
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local GoLib = require(ReplicatedStorage.GoLib)

local number = GoLib.create(1)

print(number)
```
**Output**
```
1
```
## How to set value
```luau
number(3)
print(number)
```
**Output**
```
3
```

## Math operations
```luau
number(number+1)
number(number-1)
number(number*2)
```
number value now is 2

You can do this too
```luau
local newNumber = number + 1
```

## How extract value
Here is two ways:

### First
Using the get method.
```luau
print(number:get())
```
### Second
Using the value field
```luau
print(number.value)
```
## Listening
You can track changes in a value using the listen method.

### Example
```luau
local connect = number:listen(function(new,old)
    print(`New value is {new}\nOld value is {old}`)
end)

number(3)
```
**Output**
```
New value is 3
Old value is 1
```
### Disconnecting listening

```luau
connect()

number(4)
```
**Output**
```
```

::: tip
You dont need disconnect all connects before nil assignment
```luau
local atom = GoLib.create("string")

atom:listen(function()end)

atom = nil
```
No memory leaks
:::