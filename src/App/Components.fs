namespace global

open Fable.Core
open Feliz.JSX.Solid


module Color =
    let context = Solid.createContext()

type Components =
    [<JSX.Component>]
    static member ColorProvider(color: string, children) =
        let color, setColor = Solid.createSignal(color)
        Color.context.Provider((color, setColor), children)

    // [<JSX.Component>]
    // static member Div (classes: string seq) children =
    //     Html.div [
    //         Attr.classList classes
    //         Html.children children
    //     ] // this does not work, only the below works:

    [<JSX.Component>]
    static member Div (classes: string seq) children =
        JSX.jsx $"""<div class={String.concat " " classes}>{children}</div>"""


    [<JSX.Component>]
    static member TextInput(value: string, onInput: string -> unit) =
        Html.input [
            Attr.typeText
            Attr.value value
            Ev.onTextInput onInput
        ]

    [<JSX.Component>]
    static member FloatInput(value: float, onInput: float -> unit, ?defVal: float) =
        let strValue, setStrValue = Solid.createSignal(string value)
        let parse (v: string) =
            try float v with _ -> defaultArg defVal 0.
        Html.input [
            Attr.typeText // type="number" only accepts integers
            Attr.value (strValue())
            Ev.onTextInput (fun v ->
                setStrValue v
                parse v |> onInput)
        ]
