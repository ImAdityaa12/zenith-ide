"use client"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";


export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create)
  return (
    <div>
      <Button
        onClick={() => {
          createProject({
            name: "Testing"
          })
        }}
      >
        Create
      </Button>
      {projects?.map(({ _id, name, ownerId }) => <div key={_id}>Name: {name}
        ownerId: {ownerId}
      </div>)}
    </div>
  );
}
