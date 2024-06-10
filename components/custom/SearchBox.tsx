"use client";

import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DatePicker from "./DatePicker";
import { Button } from "../ui/button";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className="bg-white p-10 w-full max-w-md flex flex-col border border-secondary4 rounded-3xl">
      {/* search and filter component */}

      <div className="mb-5">
        {/* label */}
        <Label htmlFor="destination"> Where are you going?</Label>
        {/* input and icon */}
        <div className="relative flex items-center mb-5">
          <Input id="destination" placeholder='try "Taiwan"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>
        {/* date picker */}
        <div className="flex flex-col xl:flex-row gap-5">
          {/* check in */}
          <div className="flex flex-col flex-1">
            <Label>Check in</Label>
            <DatePicker />
          </div>
          {/* check out */}

          <div className="flex flex-col flex-1">
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Button size="lg" variant="default">
          Search Hotel
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
