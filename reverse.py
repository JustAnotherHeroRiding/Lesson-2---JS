def shift_list_right_inplace(lst, shift):
    size = len(lst)
    shift %= size  # Ensure that shift is within the range of the list size

    # Reverse the entire list
    lst.reverse()

    # Reverse the first part up to the shift position
    lst[:shift] = reversed(lst[:shift])

    # Reverse the second part from shift position to the end
    lst[shift:] = reversed(lst[shift:])

# Example usage:
original_list = [1, 2, 3, 4, 5, 6]
shift_amount = 2

shift_list_right_inplace(original_list, shift_amount)
print("Shifted List:", original_list)

