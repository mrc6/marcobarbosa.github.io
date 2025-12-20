pictures_to_table = {
    path = function(directory)
        local t = {}
        local handle = io.popen('ls "' .. directory .. '"\n')
        if handle then
            for filename in handle:lines() do
                table.insert(t, filename)
            end
            handle:close()
        end
        return t
    end
}

string_to_json_file_append = {
    file = function(file_name, string_to_write)
        openning_file = io.open(file_name, 'a')
        file_string = openning_file:write(string_to_write)
        openning_file:flush()
        openning_file:close()
        return nil
    end
}

local directory_path = "./Pictures"
available_pics = pictures_to_table.path(directory_path)

local index = 1
for key, value in pairs(available_pics) do
    start_string = "let available_pics = [\n"
    string = 
    "  {\n" .. 
      "    picture" .. ":" .. "\"" .. directory_path .. "/" .. value .. "\",\n" ..
      "    description" .. ":" .. "\"" .. key .. "\"\n"
    .. "  }"
    end_string = "\n];"
    result_string = ""
    
    -- check conditions for commas and new lines
    if index < #available_pics then
        result_string = string .. ",\n"
    else
        result_string = string .. end_string .. ",\n"
    end

    if index == 1 then
        result_string = start_string .. result_string
    end
    
    if index == #available_pics then
        result_string = string .. "\n];"
    end

    --save to file
    string_to_json_file_append.file("available_pics.js", result_string)
    index = index + 1
end
