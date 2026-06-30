-- DropIndex
DROP INDEX "UserEvent_createdAt_idx";

-- DropIndex
DROP INDEX "UserEvent_eventType_idx";

-- DropIndex
DROP INDEX "UserEvent_userId_idx";

-- CreateIndex
CREATE INDEX "UserEvent_userId_productId_eventType_createdAt_idx" ON "UserEvent"("userId", "productId", "eventType", "createdAt");
