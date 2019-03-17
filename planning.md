# TODO

- press TAB to move to next field
- possibly made edit mode active for whole record, for
- inputs for number, bool, and choice

# Features

User is presented with a list of record rows
User can add a new record
User can delete a record
User can sort records from the header row
User can double click a record's field to enter edit mode
Field being edited changes display to input field
User can press enter to save modify the record
User can revert record to any of previous states
Component persists change to store after record is changed
Later: validate fields

## Two ways

Table based components for tabular data fields
Div based data field components that can be positioned arbitrarily

## Input type based on data type

string -> input, textarea
number -> number
bool -> checkbox
options -> select
date -> date

# Components

- RecordList
  - Props
    - array of records
    - methods for create, update, delete
    - record model
      - for each field:
        - isEditable (default true)
        - hidden (default false)
        - input type (text, number, bool, choice)
          - options for choice
  - State
    - array of record objects
  - Actions
    - add record (click button)
    - sort records by field (click column head)
- Record
  - Props
    - initial record object
    - methods for update, delete... duplicate?
  - State
    - original object
    - modified object (array of object histories)
    - dirty? (modified and not saved)
  - Actions
    - delete record (click button)
    - revert record (click button)
- RecordField
  - Props
    - initial field value
    - method onEdit
  - State
    - original value
    - modified value (array of field histories)
  - Actions
    - edit field (button click or double click)
    - save (press enter or input blur)
