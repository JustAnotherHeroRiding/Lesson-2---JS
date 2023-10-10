def shift_list_right_inplace(lst, shift):
    size = len(lst)
    shift %= size  

    lst.reverse()

    lst[:shift] = reversed(lst[:shift])

    lst[shift:] = reversed(lst[shift:])

original_list = [1, 2, 3, 4, 5, 6]
shift_amount = 2

shift_list_right_inplace(original_list, shift_amount)
print("Shifted List:", original_list)

