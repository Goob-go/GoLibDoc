# Table atom

::: info WHAT YOU'LL LEARN
⚫How to create a table atom

⚫How to use table atom
:::

## Creating
There are two ways to create

### First
```luau
local t = GoLib.createTable({})
```
### Second
```luau
local t = GoLib.create({})
```
What's the difference? The difference is that when you use createTable, it will be with hints.

## Usage

```luau
local t = GoLib.createTable({
    number = 3,
    atom = GoLib.create(1),
})
```
### Changing the value
It is the same as in a regular table
```luau
t.number = 5
t.atom(2)
```
### Getting a value
```luau
print(t.number)
```
**Output**
```
5
```

## Listening
### Listen
Basic listen works **only when setting a new value for t**
```luau
t:listen(function(new,old)
    print(new)
end)

t.number = 9

t({})
```
**Output**
```
{}
```
### ListenFields
Tracks when a field in the table changes
```luau
local t = GoLib.createTable({
	b = 3
})

local connect = t:listenFields(function(new, old, field)
	print(new,old,field)
end)

t.b = 4
```
**Output**
```
4 3 b
```
Just like listen returns a connection