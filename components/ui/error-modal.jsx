"use client";

import { XCircle } from "lucide-react";
import { useError } from "@/context/error-context";
import { Dialog, DialogContent, DialogFooter } from "./dialog";
import { Button } from "./button";

export function ErrorModal() {
  const { error, clearError } = useError();

  if (!error) return null;

  // Extract error message from different error formats
  const getErrorMessage = (error) => {
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    if (error.error) return error.error;
    return "An unexpected error occurred";
  };

  // Format technical error messages to be more user-friendly
  const formatErrorMessage = (message) => {
    // Handle OpenTok errors
    if (message.includes("OT.Publisher Access Denied")) {
      return "Camera and microphone access is required for video calls. Please allow access in your browser settings.";
    }
    // Handle other common errors
    if (message.includes("NetworkError")) {
      return "Unable to connect to the server. Please check your internet connection.";
    }
    if (message.includes("401")) {
      return "Your session has expired. Please sign in again.";
    }
    if (message.includes("403")) {
      return "You don't have permission to perform this action.";
    }
    if (message.includes("404")) {
      return "The requested resource was not found.";
    }
    if (message.includes("500")) {
      return "Something went wrong on our end. Please try again later.";
    }
    return message;
  };

  const errorMessage = formatErrorMessage(getErrorMessage(error));

  return (
    <Dialog open={!!error} onOpenChange={() => clearError()}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <XCircle className="h-8 w-8 text-destructive" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Error</h3>
            <p className="mt-2 text-sm text-muted-foreground">{errorMessage}</p>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="gradient"
            className="w-full"
            onClick={() => clearError()}
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
